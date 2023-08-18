
import { cn } from "@/lib/utils"

import {
  Card
} from "@/components/ui/card"


type CardProps = React.ComponentProps<typeof Card>

export function CardItem({ className, ...props }: CardProps) {
  return (
    <Card className={cn("sm:max-w-sm", className)} {...props}>
        {props.children}
    </Card>
  )
}
