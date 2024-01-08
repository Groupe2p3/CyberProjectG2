export const getAllForms = async () => {
    const response = await fetch(
        `http://localhost:3000/forms`
    );
    if (response.status < 200 || response.status >= 300) {
        throw new Error(
            `Erreur lors de la récupération des pokemons avec le texte ${search} : ${response.status}`,
        );
    }
    return await response.json();
};