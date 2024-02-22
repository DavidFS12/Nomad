import {review1, review2} from "./itemReview"

export const Review = () => {
  const starts = Array.from({length: 5}, (_, index) => (
    <img key={index} className="h-[22px] lg:h-4 lg:w-4 xl:h-5 xl:w-5 xxl:h-6 xxl:w-6" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba24_star%20full.svg"/>
  ))

  return (
    <div className="relative bg-[#f5f5fa]">
      <div className="block lg:hidden w-full absolute top-[180px] md:top-[80px] text-center font-medium text-[70px] xs:text-[100px] md:text-[160px]">
        <h1>REVIEWS</h1>
      </div>
      <div className="hidden lg:block reviewCard top-[200px] lg:fixed lg:top-1/2 transform -translate-y-1/2 w-full z-10 xs:text-[120px] md:text-[150px] text-center lg:text-[300px] font-medium lg:left-[1500px]">
        <h1>REVIEWS</h1>
      </div>
      <div className="relative lg:top-[150px] grid lg:grid-cols-2 xs:px-[25px] lg:px-[140px] xl:px-[190px] xxl:px-[220px] pt-[300px] z-20">
        <div className="grid grid-rows-2 gap-y-10 lg:gap-y-0 p-5 lg:pb-[200px]">
          {
            review1.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" bg-white rounded-[48px] p-8 xs:px-8 lg:px-10 xl:py-16 xl:mb-40 lg:mb-[100px]">
                    <div className="flex justify-between pb-5">
                      <p className="xs:text-[24px] sm:text-[28px] lg:text-[16px] xl:text-[24px] xxl:text-[30px]">{item.title}</p>
                      <div className="flex gap-1">
                        {starts}
                      </div>
                    </div>
                    <p className='xs:text-[14px] sm:text-[18px] lg:text-[12px] xl:text-[16px] xxl:text-[19px] text-[#595959]'>{item.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="block lg:hidden relative grid gap-y-10 grid-rows-2 h-full p-5 xs:pb-[100px]">
          {
            review2.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" bg-white rounded-[48px] p-8 xs:px-8 lg:px-10 xl:py-16 xl:mb-40 lg:mb-[100px]">
                    <div className="flex justify-between pb-5">
                      <p className="xs:text-[24px] sm:text-[28px] xl:text-[24px] lg:text-[16px]">{item.title}</p>
                      <div className="flex gap-1">
                        {starts}
                      </div>
                    </div>
                    <p className='xs:text-[14px] sm:text-[18px] xl:text-[16px] lg:text-[12px] text-[#595959]'>{item.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="hidden lg:block reviewCardCol2 relative grid-rows-2 h-full p-5 pt-20">
          {
            review2.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" bg-white rounded-[48px] p-8 xs:px-8 lg:px-10 xl:py-16 xl:mb-40 lg:mb-[100px]">
                    <div className="flex justify-between pb-5">
                      <p className="xs:text-[24px] sm:text-[28px] lg:text-[16px] xl:text-[24px] xxl:text-[30px]">{item.title}</p>
                      <div className="flex gap-1">
                        {starts}
                      </div>
                    </div>
                    <p className='xs:text-[14px] sm:text-[18px] lg:text-[12px] xl:text-[16px] xxl:text-[19px] text-[#595959]'>{item.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}