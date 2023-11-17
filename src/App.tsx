import axios from "axios";
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const App = () => {

const api = "http://localhost:3000/data";
const [data, setData] = useState<Number[]>([]);
const [text, setText] = useState<string>("");
const [editModal, setEditModal] = useState<boolean>(false);
const [editText, setEditText] = useState<string>("");
const [idx, setIdx] = useState<any>(null);

  async function getData() {
    try {
      let {data}=await axios.get(api)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

async function deleteTodo(id:number){
  try {
    let {data}=await axios.delete(`${api}/${id}`)
    console.log(data)
    getData()
  } catch (error) {
    
  }
}

async function addData(newData:any){
  
  try {
    let {data}=await axios.post(api,newData)
    console.log(data)
    getData()
  } catch (error) {
    
  }
}


async function EditData(id:number) {
  let EditUser={
 title:editText
  }
  try {
    let {data}=await axios.put(`${api}/${id}`,EditUser)
    getData()
    setEditModal(false)
    console.log(data)
  } catch (error) {
    
  }
}



useEffect(()=>{
  getData()
},[])



  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[22px]">Todo list With Nabi</h1>
      <div className="flex flex-col items-center p-4 bg-white rounded shadow-lg">
        <input 
          className="w-full px-4 py-2 mb-4 border-4 border-green-500 rounded focus:outline-none focus:border-green-700 transition-colors" 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors" 
          onClick={() => {
            if(text.length === 0){
              alert("Please enter text");
            } else {
              addData({ title: text });
              setText("");
            }
          }}
        >
          Add
        </button>
      </div>
      {data.map((e: any) => (
        <div key={e.id} className="flex items-center justify-between w-full p-4 mt-4 bg-green-600 text-white rounded gap-4 shadow-lg">
          <h1 className="font-bold">{e.title}</h1>
          <div>
            <button className="px-2 py-1 mr-2 bg-red-500 rounded hover:bg-red-700 transition-colors" onClick={() => deleteTodo(e.id)}>Delete</button>
            <button 
              className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-700 transition-colors" 
              onClick={() => {
                setEditModal(true);
                setEditText(e.title);
                setIdx(e.id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      <Transition appear show={editModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setEditModal(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Todo
                </Dialog.Title>
                <div className="mt-2">
                  <input 
                    className="w-full px-4 py-2 mb-4 border-[2px] rounded focus:outline-none transition-colors" 
                    type="text"  
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <button 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors" 
                    onClick={() => EditData(idx)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  

  )
}

export default App
