import Link from "next/link";

export default function InsertPage() {

    const insertRecord = async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const about = document.getElementById('about').value;
        const data = {
            name: name,
            about: about
        };

        console.log(data);

        fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("A records has been uploaded")
                document.getElementById('name').value = '';
                document.getElementById('about').value = '';
            })
    }

    return (
        <section className={"bg-white"}>
            <div className={"container px-6 py-10 mx-auto"}>
                <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Insert Facts about flowers</h1>
                <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>This is where you can insert facts about flowers</p>
                <div className="flex justify-left mt-8">
                    <Link href="/">
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                            See all flower fact
                        </button>
                    </Link>
                </div>
                <div>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 ">Flower name</label>
                            <input type="text" id="name"
                                className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="insert flower name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="about"
                                className="block mb-2 text-sm font-medium text-blue-900 ">About</label>
                            <textarea id="about"
                                className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                required />
                        </div>
                        <button
                            onClick={insertRecord}
                            type="submit"
                            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                            Submit
                        </button>
                    </form>
                </div>


            </div>
        </section>

    )
}