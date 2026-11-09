import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export function AuthProvider({ children }) {
const [usuario, setUsuario] = useState(null);
const login = (nome) => setUsuario({ nome });
const logout = () => setUsuario(null);
return (
<AuthContext.Provider value={{ usuario, login, logout }}>
{children}
</AuthContext.Provider>
);
}

export function useAuth() {
const ctx = useContext(AuthContext);
if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
return ctx;
}