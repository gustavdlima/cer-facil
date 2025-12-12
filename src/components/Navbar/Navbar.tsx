export function Navbar() {
  return (
    // Container principal da navbar com borda inferior e fundo branco
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white shadow-sm">
      {/* Container responsivo centralizado com padding lateral */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flexbox para distribuir logo e menu nas extremidades */}
        <div className="flex justify-between h-16">
          {/* Seção do logo/título */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">CER Fácil</h1>
          </div>
          {/* Seção do menu de navegação */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Início
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Contato
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sobre
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}