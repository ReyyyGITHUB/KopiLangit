export default function TestimonialCard({ testimonial }) {
  const { name, role, text, image } = testimonial;

  return (
    <div
      className="
        flex flex-col px-5 py-4 items-start gap-3 
        rounded-[20px] border border-[#D8BFA3] 
        bg-[#FFF8ED] drop-shadow-2xl 
        transition-all duration-300 ease-out 
        hover:-translate-y-1 hover:border-[#C8A47E]
        hover:shadow-[0_8px_20px_rgba(139,94,60,0.2)]
        hover:bg-[#FFF4E5]
      "
    >
      <div className="flex flex-col items-start gap-[34px] w-full">
        <div className="flex w-8 h-8 p-3 flex-col items-center justify-center rounded-full bg-[#A47148]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
          >
            <path
              d="M3.5 0C1.583 0 0 1.584 0 3.5C0 4.375 0.237 5.133 0.691 5.711C1.023 6.134 1.514 6.364 1.991 6.611C2.017 7.41 1.971 7.629 1.331 8.911C0.994 9.585 1.75 10.279 2.393 9.886C5.798 7.79 7 5.333 7 3.5C7 1.584 5.417 0 3.5 0ZM12.5 0C10.583 0 9 1.584 9 3.5C9 4.375 9.237 5.133 9.691 5.711C10.023 6.134 10.514 6.364 10.991 6.611C11.017 7.41 10.971 7.629 10.331 8.911C9.994 9.585 10.75 10.279 11.393 9.886C14.798 7.79 16 5.333 16 3.5C16 1.584 14.417 0 12.5 0Z"
              fill="#C8A47E"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-[#4A3C30] opensans text-base font-normal leading-relaxed">
            {text}
          </p>

          <div className="flex py-4 items-center gap-3 border-t border-t-[#8C7761] w-full">
            <div className="w-14 h-14 border-2 rounded-full border-[#C8A47E] overflow-hidden">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5 items-start">
              <h1 className="text-[#8C7761] poppins text-base font-medium">
                {name}
              </h1>
              <p className="text-[#8C7761] poppins text-sm font-normal">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
