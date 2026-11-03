import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

function Usuario({ id }) {
const [usuario, setUsuario] = useState(null)

useEffect(() => {
fetch(`/api/usuarios/${id}`)
.then(res => res.json())
.then(dados => setUsuario(dados))
}, [id]) // busca de novo sempre que "id" mudar

if (!usuario) return <p>Carregando...</p>
return <p>{usuario.nome}</p>
}
