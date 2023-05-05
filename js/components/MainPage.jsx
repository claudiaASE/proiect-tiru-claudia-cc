import Link from "next/link";
import { useEffect, useState } from "react"

export default function MainPage() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    const deleteRecord = async (e) => {
        e.preventDefault();

        console.log(e.target.id);
        const id = e.target.id;

        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <section className={"bg-white"}>
            <div className={"container px-6 py-10 mx-auto"}>

                <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Facts flowers</h1>
                <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>This is an app that showcases facts about flowers</p>
                <div className="flex  mt-8">
                    <div className="left-0 w-1/2">
                        <Link href="/insert">
                            <button
                                type="button"
                                className="  focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Add new flower fact
                            </button>
                        </Link>
                    </div>

                    <div className="right-0 w-1/2 ">
                        <Link href="/chat">
                            <button
                                type="button"
                                className="  focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Chat with a florist
                            </button>
                        </Link>
                    </div>

                </div>
                <div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
                    {records.map(record => (
                        <div key={record._id} className={"max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow "}>
                            <h3 className={"mb-2 text-2xl font-bold text-blue-600"}>{record.name}</h3>
                            <p className={"font-normal font-bold text-indigo-400"}>{record.about}</p>
                            <button type="button"
                                onClick={deleteRecord}
                                id={record._id}
                                className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Delete fact</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}