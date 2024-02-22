"useClient"
import { awards } from "./itemsAwards";

export const Awards = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="infinito text-[80px] flex gap-x-5 text-center py-[30px] mb-[60px]">
          <h1>AWARDS •</h1>
          <h1 className="text-[#B3B3B3]">AWARDS •</h1>
        </div>
        <div className="infinito text-[80px] flex gap-x-5 text-center py-[30px] mb-[60px]">
          <h1>AWARDS •</h1>
          <h1 className="text-[#B3B3B3]">AWARDS •</h1>
        </div>
        <div className="infinito text-[80px] flex gap-x-5 text-center py-[30px] mb-[60px]">
          <h1>AWARDS •</h1>
          <h1 className="text-[#B3B3B3]">AWARDS •</h1>
        </div>
      </div>ñ
      
      <div className="grid grid-cols-3 px-[80px] justify-center">
        {
          awards.map((item, index) => {
            return(
              <div key={index}>
                <div className="p-[15px]">
                  <img className="rounded-[35px]" src={item.image}/>
                  <div className="pl-5">
                    <h1 className="font-medium text-[20px] my-[10px]"> {item.title}</h1>
                    <p className="text-[12px]"> {item.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}