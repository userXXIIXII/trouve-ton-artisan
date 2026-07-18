import React from 'react';
import { useParams } from 'react-router-dom';

export default function Artisan() {
    const { id } = useParams<{ id: string }>();

    return (
        <main>
            <h1>Fiche Artisan</h1>
            <p>Affichage de l'artisan avec l'ID : <strong>{id}</strong></p>
        </main>
    );
}