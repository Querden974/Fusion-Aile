import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"
import {motion} from "framer-motion"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute right-1 bottom-0"
      >
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      className="toaster group "
      // style={
      //   {
      //     "--normal-bg": "var(--popover)",
      //     "--normal-text": "var(--popover-foreground)",
      //     "--normal-border": "var(--border)",
      //   } as React.CSSProperties
      // }
      {...props}
    />
        </motion.div>
  )
}

export { Toaster }
