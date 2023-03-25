import CrossIcon from "./components/icons/crosIcon";
import MoonIcon from "./components/icons/Moon";

const App = () => {


    const caca = () => {
        console.log('oli')
    }
    
    return (
        <div className="min-h-screenpx-4 bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]  bg-contain bg-no-repeat">
            <header className="container mx-auto pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button> <MoonIcon onClick={caca} /> </button>
                </div>

                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full border-none text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white">
                    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Javascript course in blueeweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Javascript course in blueeweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Javascript course in blueeweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between py-4 px-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className=" flex justify-center rounded-md bg-white p-4 gap-4">
                    <button className="text-blue-500"> All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <section className="text-center mt-8">Drag and drop</section>
        </div>
    );
};

export default App;
