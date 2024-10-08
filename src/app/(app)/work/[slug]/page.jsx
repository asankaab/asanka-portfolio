import { getProject } from "@/hooks/useData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Loading from "../../loading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BackButton from "@/components/BackButton";
import { PortableText } from "next-sanity";
import { components } from "@/components/PortableText";

export default async function Page({params}) {

  const project = await getProject(params.slug)

  if (project) {

    return (
    <div className="w-full">
      <div className="container w-full mx-auto px-3">
        <BackButton/>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
          <div className="relative border border-black/5 rounded-xl overflow-hidden">
          <Carousel>
              <CarouselContent className="aspect-square">
                {project.images.map((item) => {
                  return (
                    <CarouselItem key={item._key} className="flex justify-center items-center bg-grayshade">
                      <Image className="h-auto w-auto scale-95 rounded-lg" src={urlFor(item).width(1000).url()} width={1000} height={1000} alt="image"/>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <div className="absolute bottom-8 right-20">
                <CarouselPrevious/><CarouselNext/>
              </div>
            </Carousel>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-3xl">{project.title}</h1>
              <span className="text-xs bg-grayshade px-2 py-1 rounded-full">{project.date}</span>
            </div>
            <PortableText value={project.description} components={components} />
          </div>
        </section>
      </div>
    </div>
    )
  } else {
    return <div className="container w-full mx-auto px-3">
      <h1>Content not found!</h1>
      <BackButton/>
    </div>
  }
}