import attentionLevels from "@/data/attention-levels.json";
import type { AttentionLevel } from "@/types/attention-level";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AttentionLevel() {
  const levels = attentionLevels as AttentionLevel[];

  return (
    <section id="attention-level" className="space-y-10 m-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Card key={level.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {level.title}
              </CardTitle>
              <CardDescription className="text-center">
                {level.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {level.components.map((component) => (
                  <AccordionItem key={component.id} value={component.id}>
                    <AccordionTrigger>{component.title}</AccordionTrigger>
                    <AccordionContent className="text-justify">
                      {component.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
