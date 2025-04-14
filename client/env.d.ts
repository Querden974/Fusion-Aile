interface ImportMetaEnv {
    readonly VITE_RESERVATION:string;
    readonly VITE_BASE_URL:string;
}

interface ImportMeta {
    readonly env:ImportMetaEnv
}