

const RightCardContent = (props) => {
  return (
       <div className='absolute p-8 top-0 left-0 h-full w-full  flex flex-col'>
        <h2 className='bg-white rounded-full  h-12 w-12 flex items-center justify-center text-xl font-semibold mb-10 '>{props.id + 1}</h2>
        <div className='mt-auto'>
            <p className=" text-shadow-2xs text-lg leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias in aliquam, blanditiis esse laudantium!</p>
          <div className='flex justify-between mt-4'>
              <button style ={{backgroundColor:props.color}} className='text-white py-2 px-4 rounded-full'>{props.tag}</button>
              <button className=' text-white py-2 px-4 rounded-full ml-2'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
