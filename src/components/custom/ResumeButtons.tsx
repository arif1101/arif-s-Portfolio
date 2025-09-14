
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ResumeButtons() {
  return (
    <div className="flex gap-4">
      {/* Resume Download */}
      <a href="/resume.pdf" download>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">
          Download Resume
        </Button>
      </a>

      {/* Preview in Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-gray-600 !bg-black !text-white">
            Preview CV
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          <div className="border w-full h-[800px]">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
