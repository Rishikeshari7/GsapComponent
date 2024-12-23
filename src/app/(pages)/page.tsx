import CustomTextEffect from "@/Components/CustomText";


export default function Home() {
  return (
    <div className="overflow-x-hidden flex h-screen min-w-screen">
      <CustomTextEffect
      duration= {1.5}
      translateY= {0}
      staggerEach={ 0.05}
      staggerFrom= 'start'
      containerClass=" w-full md:w-[70vw] h-[80vh]   "
      textClass=""
      letterClass="inline-block text-4xl md:text-8xl translate-y-full rotate-45"
    >
      THOUGHTFUL DESIGN&nbsp;FOR SOULFUL BRANDS
    </CustomTextEffect>
  </div >
  );
}
