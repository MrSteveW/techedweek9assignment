import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WelcomeAccordian() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-white text-lg rounded-2xl p-2"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Code of Conduct</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>You will behave yourself at all times.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>I promise not to share any of your stuff. Promise.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Soft drink policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>We only drink hot drinks here.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
