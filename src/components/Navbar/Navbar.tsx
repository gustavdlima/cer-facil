import { Button } from "@/components/ui/button";
const scrollToNetworkInfo = () => {
  const element = document.getElementById("network-info");
  if (element) {
    const navbarHeight = 64; // altura da navbar (h-16)
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
};

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-border bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">CER Fácil</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none">
              Início
            </a>
            <div onClick={scrollToNetworkInfo} className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none">
              Saber Mais
            </div>
            <a href="#" className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none">
              Contato
            </a>
            <a href="#" className="text-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none">
              Sobre
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}