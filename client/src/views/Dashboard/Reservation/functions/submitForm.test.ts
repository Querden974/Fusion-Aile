import { submitReservation } from "./submitForm.ts";
import { FormEvent, RefObject } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { describe, expect, it, vi } from "vitest";

vi.mock("axios");
vi.mock("sweetalert2", () => {
    const mockFire = vi.fn();
    const mockToast = { fire: mockFire };
    return {
        default: {
            mixin: vi.fn(() => mockToast),
        },
        __esModule: true
    };
});

describe("Submit Reservation", () => {
    let form: HTMLFormElement;
    let ref: RefObject<HTMLFormElement>;

    beforeEach(() => {
        form = document.createElement("form");
        const input = document.createElement("input");
        input.name = "nom";
        input.value = "Doe";
        form.appendChild(input);

        ref = { current: form };
    });
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should send form with axios.post and show toast when success', async () => {
        // @ts-ignore
        const mockAxios = axios.post as vi.Mock;
        mockAxios.mockResolvedValue({ data: {} });


        const mockToast = { fire: vi.fn() };
        // @ts-ignore
        (Swal.mixin as vi.Mock).mockReturnValue(mockToast);

        const fakeEvent = {
            preventDefault: vi.fn(),
        } as unknown as FormEvent<HTMLFormElement>;

        const date = new Date("2025-05-01T00:00:00");
        const hours = "15:30";

        await submitReservation(fakeEvent, ref, date, hours);

        const expectedData = {
            nom: "Doe",
            hour: "15:30",
            day: "01/05/2025",
            formated: new Date(date).setHours(15, 30).toString(),
        };

        expect(mockAxios).toHaveBeenCalledWith(
            "http://localhost:5000/resa",
            expectedData,
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        expect(mockToast.fire).toHaveBeenCalledWith(
            expect.objectContaining({
                icon: 'success',
                title: 'Réservation effectuée',
                text: "01/05/2025 - 15:30",
            })
        );

    });

    it("should show error toast when axios.post failed", async () => {
        // @ts-ignore
        (axios.post as vi.Mock).mockReset();
        // @ts-ignore
        (axios.post as vi.Mock).mockRejectedValue(new Error("Network Error"));

        const mockToast = { fire: vi.fn() };
        // @ts-ignore
        (Swal.mixin as vi.Mock).mockReturnValue(mockToast);

        const fakeEvent = {
            preventDefault: vi.fn(),
        } as unknown as FormEvent<HTMLFormElement>;

        const date = new Date("2025-05-01T00:00:00");
        const hours = "15:30";

        await submitReservation(fakeEvent, ref, date, hours);

        expect(mockToast.fire).toHaveBeenCalledWith(
            expect.objectContaining({
                icon: "error",
                title: "Une erreur est survenue",
                text: "Network Error",
            })
        );
    });



});
