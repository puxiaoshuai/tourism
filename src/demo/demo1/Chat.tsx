import React from 'react'

export default function Demo1() {
  return (
    <div className="flex bg-white p-6 rounded-xl shadow-md max-w-sm items-center mx-auto space-x-4">
        <div className="logo">
           <img className=" w-10 h-10 rounded-2xl" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b6eae3250bb62fadb3d2527f466cf033_b.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627786460&t=74755cca283ccfabf09196ce17c3340c" alt="logo"/>
        </div>
        <div className="message">
            <div className="text-xl font-medium text-black">ChltChat</div>
            <div className="text-gray-500">you have a new messsage</div>
        </div>
    </div>
  )
}
