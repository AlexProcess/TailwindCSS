import { IconList } from "../../assets/images/icon-list";

export const InitialText = () => {
    return (
        <section className="flex-col p-6 space-y-2">
            <div className="">
                <h1 className="text-4xl font-bold text-dark-slate min-w-[1440] text-5xl">
                    Stay updated!
                </h1>
            </div>
            <div className="min-w-[1440] w-4/5">
                <p className="font-normal text-dark-slate ">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>
            <div className="flex-col space-y-4">
                <div className="flex-row items-center mt-4">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p>Product discovery and building what matters</p>
                    </div>
                </div>
                <div className="flex-row items-center ">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                </div>
                <div className="flex-row items-center">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p>And much more!</p>
                    </div>
                </div>
                <></>
            </div>
        </section>
    );
};
