function SideBar(){

    function showsidebar(){
        
    }

    return(<div className="off-screen">
        <a onClick={showsidebar()}><i className="fa-solid fa-x"></i></a>
        <a href="#home" onClick={showsidebar()}>Home</a>
        <a href="#About" onClick={showsidebar()}>About</a>
        <a href="#Experiance" onClick={showsidebar()}>Experiance</a>
        <a href="#skills" onClick={showsidebar()}>Skills</a>
        <a href="#projects" onClick={showsidebar()}>Projects</a>
        <a href="#Testimonials" onClick={showsidebar()}>Testimonials</a>
        <a href="#Highlights" onClick={showsidebar()}>Highlights</a>
    </div>);
}


export default SideBar;