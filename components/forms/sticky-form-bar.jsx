"use client";

import { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConsultationForm } from "./consultation-form";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

export function StickyFormBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2 px-4 py-3">
          <Button
            onClick={() => setOpen(true)}
            className="flex-1"
            size="sm"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Free Consultation
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${primaryPhoneTel}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Free Case Evaluation</DialogTitle>
          </DialogHeader>
          <ConsultationForm compact onSubmit={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
