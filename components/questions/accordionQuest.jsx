import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 
export function AccordionQuest() {
  return (
    <Accordion type="single" collapsible className="w-3/4">
      <AccordionItem value="item-1" className="w-full bg-miniCard p-4">
        <AccordionTrigger>How does Growth Kali ensure high-quality leads?</AccordionTrigger>
        <AccordionContent>
          Our AI-driven strategies target and engage the right audience, ensuring that the leads we generate are highly qualified and ready to convert.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="w-full bg-miniCard p-4">
        <AccordionTrigger>Can Growth Kali's services be tailored to my specific business needs?</AccordionTrigger>
        <AccordionContent>
          Absolutely! We provide customized solutions tailored to meet the unique needs and goals of your business.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="w-full bg-miniCard p-4">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Simply schedule a free consultation with our team. We’ll assess your needs and develop a tailored plan to help you achieve your goals.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}