import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#aa00aa] text-[#333]">
      <header className="py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 w-[1440px] mx-auto">
          <div className="space-y-4">
            <Image
              src="/images/emir.jpg"
              alt="Emir Haidarov"
              width={400}
              height={400}
              className="rounded-full mx-auto"
              objectFit="contain"
            />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#ffaa00]">
              Эмир-Султан Хайдаров
            </h1>
            <p className="text-xl text-[#ffffff]">г. Астана</p>
            <p className="max-w-[700px] text-[#ffffff] md:text-xl">
              Виртуозный саксофонист-альтист, известный своим уникальным стилем
              и страстным исполнением. Его музыка завораживает слушателей по
              всему миру.
            </p>
          </div>
        </div>
      </header>
      {/* <section className="py-12 md:py-24 lg:py-32 bg-[#e6e6fa]">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 w-[1440px] mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4169e1]">
              Видео-галерея
            </h2>
            <p className="text-[#ffffff] md:text-xl">
              Посмотрите видео с выступлениями Эмир-Султана и насладитесь его
              виртуозной игрой на саксофоне.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xvFZjo5PgG0?si=fc2AoIYDTjRpSnSO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xvFZjo5PgG0?si=fc2AoIYDTjRpSnSO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xvFZjo5PgG0?si=fc2AoIYDTjRpSnSO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xvFZjo5PgG0?si=fc2AoIYDTjRpSnSO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#ffaa00]">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 w-[1440px] mx-auto">
          <div className="space-y-4">
            {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#aa00aa]">
              Контакты
            </h2> */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-[#ffffff]" />
                <span className="text-[#ffffff]">emirhaidarov@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <TextIcon className="h-5 w-5 text-[#ffffff]" />
                <span className="text-[#ffffff]">telegram: @Emirr_29</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-[#ffffff]" />
                <span className="text-[#ffffff]">+7 (700) 299-61-89</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-[#ffffff]" />
                <span className="text-[#ffffff]">+7 (987) 654-32-10</span>  
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TextIcon(props: any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

function XIcon(props: any) {
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
