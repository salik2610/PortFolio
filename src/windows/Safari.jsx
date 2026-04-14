import windowWrapper from "#hoc/windowWrapper";
import { Sidebar, ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy, PanelLeft } from "lucide-react";
import WindowControlls from "#components/WindowControlls";



const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="safari" />

                <PanelLeft className="ml-10 icon"></PanelLeft>
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon" />
                        <input type="text" placeholder="Search or enter Website Name" className="flex-1" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="blog flex flex-col items-center justify-center h-full min-h-[300px]">
                <h2>My Developer Blogs</h2>
                <h3 className="text-xl font-semibold opacity-50 mt-4">Blogs are comming soon</h3>
            </div>
        </>
    )
};


const SafariWindow = windowWrapper(Safari, "safari")


export default SafariWindow;

