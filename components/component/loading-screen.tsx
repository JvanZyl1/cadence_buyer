import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export function LoadingScreen({ onNavigateToInitial }) {
  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Marketplace Needs</CardTitle>
        <CardDescription>Enter the details of the items you're looking to purchase.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="items-needed" className="text-sm font-medium">
                Items Needed*
              </Label>
              <Input id="items-needed" placeholder="e.g. Outdoor Furniture" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="quantity-needed" className="text-sm font-medium">
                  Quantity Needed*
                </Label>
                <Input id="quantity-needed" type="number" placeholder="1" min="1" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  Location*
                </Label>
                <Input id="location" placeholder="City, State" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date-needed" className="text-sm font-medium">
                Date Needed*
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start font-normal">
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    Pick a date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" required />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="max-price" className="text-sm font-medium">
                Maximum overall price (optional)
              </Label>
              <Input id="max-price" type="number" placeholder="$0" min="0" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Link href="#" passHref>
              <a
                className={`ml-auto ${(
                  !document.getElementById("items-needed")?.value ||
                  !document.getElementById("quantity-needed")?.value ||
                  !document.getElementById("location")?.value ||
                  !document.getElementById("date-needed")?.value
                ) ? 'disabled-link-class' : 'active-link-class'}`}
                onClick={onNavigateToInitial}
              >
                Find Matches
              </a>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
