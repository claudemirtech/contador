import { useState, useEffect, useCallback } from 'react'
import logoSvg from './assets/logo.svg'

export function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = useCallback(() => {
    setCount((prev) => prev + step)
  }, [step])

  const decrement = useCallback(() => {
    setCount((prev) => prev - step)
  }, [step])

  const reset = useCallback(() => {
    setCount(0)
  }, [])

  // Suporte a atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignorar se o usuário estiver digitando em campos de texto caso existam
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return
      }

      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault()
        increment()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        decrement()
      } else if (e.key === 'r' || e.key === 'R' || e.key === 'Delete') {
        e.preventDefault()
        reset()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [increment, decrement, reset])

  return (
    <div className="w-[95%] max-w-4xl mx-auto p-4 md:py-6 space-y-6 min-h-screen flex flex-col justify-between">
      <div className="space-y-6">
        {/* Cabeçalho */}
        <header className="flex flex-col sm:flex-row items-center justify-between pb-3 border-b border-gray-200 gap-3">
          <a
            href="https://atomicweb.com.br/"
            className="flex items-center hover:opacity-80 transition"
            title="Ir para AtomicWeb"
          >
            <img src={logoSvg} alt="Logo" width="30" height="30" className="mr-2" />
            <span className="text-xl font-bold text-blue-900">AtomicWeb</span>
          </a>
          <a
            href="https://github.com/claudemirtech/contador"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium text-sm transition"
            title="Ver código no GitHub"
          >
            <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </a>
        </header>

        {/* Título Principal */}
        <div className="text-center my-6 md:my-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-500">
            Contador Simples
          </h1>
          <p className="mt-3 text-center text-base md:text-lg text-gray-600">
            Contador simples e eficaz para auxílio em tarefas que exigem contagem.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 max-w-xl mx-auto">
          {/* Topo do Card */}
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center text-gray-800 font-semibold text-lg">
              <svg
                className="w-5 h-5 text-blue-600 mr-2 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
              Contador
            </span>
            {count !== 0 && (
              <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
                {count > 0 ? `+${count}` : count}
              </span>
            )}
          </div>

          {/* Visor do Contador */}
          <div className="flex flex-col items-center justify-center py-8 px-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-inner mb-6 select-none">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
              Valor Atual
            </span>
            <div className="text-7xl md:text-8xl font-black font-mono text-blue-900 tracking-tight transition-transform">
              {count}
            </div>
          </div>

          {/* Botão Principal de Contagem */}
          <button
            type="button"
            onClick={increment}
            className="w-full py-4 px-8 bg-blue-700 hover:bg-blue-600 active:scale-[0.98] text-white font-bold text-xl rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer select-none mb-4"
            title="Contar [Espaço ou Seta Cima]"
          >
            <svg
              className="w-6 h-6 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Contar</span>
            {step > 1 && (
              <span className="text-xs bg-blue-800/80 px-2 py-0.5 rounded-full font-medium">
                +{step}
              </span>
            )}
          </button>

          {/* Botões Secundários */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={decrement}
              className="py-3 px-4 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer select-none"
              title="Subtrair [Seta Baixo]"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Subtrair</span>
            </button>
            <button
              type="button"
              onClick={reset}
              className="py-3 px-4 bg-red-50 hover:bg-red-100 active:scale-[0.98] text-red-600 hover:text-red-700 font-semibold rounded-xl border border-red-200 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer select-none"
              title="Zerar [R ou Delete]"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span>Zerar</span>
            </button>
          </div>

          {/* Seleção do Passo */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-gray-600">
            <span className="font-medium flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
              Incrementar por passo:
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 5, 10, 50, 100].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStep(s)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                    step === s
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  +{s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Informativo */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 flex flex-col sm:flex-row items-center justify-between text-sm text-blue-900 gap-3">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-blue-600 mr-2.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
          </svg>
          <span>
            <strong>Dica:</strong> Use a tecla{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs font-semibold text-blue-800 shadow-sm">
              Espaço
            </kbd>{' '}
            ou{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs font-semibold text-blue-800 shadow-sm">
              ↑
            </kbd>{' '}
            para contar,{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs font-semibold text-blue-800 shadow-sm">
              ↓
            </kbd>{' '}
            para subtrair e{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs font-semibold text-blue-800 shadow-sm">
              R
            </kbd>{' '}
            para zerar.
          </span>
        </div>
        <a
          href="https://github.com/claudemirtech/contador"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium shrink-0"
        >
          <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  )
}
