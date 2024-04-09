import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ToolTip({tool_tip_Content, children}: {tool_tip_Content: string, children: React.ReactNode}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tool_tip_Content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
