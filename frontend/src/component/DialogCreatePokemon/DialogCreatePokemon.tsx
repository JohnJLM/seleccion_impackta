import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Pokemon } from '../../model/Pokemon';
import './DialogCreatePokemon.css';

export interface DialogCreatePokemonProps {
    show: boolean;
    closeDialog(): void;
    onCreatePokemon(pokemon: Pokemon): void;
}

const initialValuePokemon = {
    name: '',
    health: 0,
    height: 0,
    number: 0,
    url: '',
    weight: 0,
};

export default function DialogCreatePokemon({
    show,
    closeDialog,
    onCreatePokemon,
}: DialogCreatePokemonProps) {
    const [newPokemon, setNewPokemon] = useState<Pokemon>(initialValuePokemon);

    // Función para manejar los cambios en los campos numéricos
    const handleNumericChange =
        (field: keyof Pokemon) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(event.target.value); // Convertir a número
            setNewPokemon((prev) => ({
                ...prev,
                [field]: value,
            }));
        };

    // Validar si todos los campos requeridos están completos
    const isPokemonValid = (): boolean => {
        const { name, url, health, height, weight, number } = newPokemon;
        return (
            name.trim() !== '' &&
            url.trim() !== '' &&
            health > 0 &&
            height > 0 &&
            weight > 0 &&
            number > 0
        );
    };
    return (
        <Dialog open={show} onClose={closeDialog} maxWidth={false}>
            <DialogTitle>{'Añadir un pokemon'}</DialogTitle>
            <DialogContent
                sx={{
                    display: { md: 'flex' },
                    flexWrap: 'wrap',
                    padding: { xs: '0px' },
                    width: { md: 'fit-content', xs: '100%' },
                    mx: '1%',
                    gap: '1%',
                    mb: 2,
                    justifyContent: 'center',
                }}
            >
                {/* Nombre */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="Nombre"
                    variant="standard"
                    onChange={(event) =>
                        setNewPokemon((prev) => ({ ...prev, name: event.target.value }))
                    }
                />

                {/* URL de la imagen */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="URL de la imagen"
                    variant="standard"
                    onChange={(event) =>
                        setNewPokemon((prev) => ({ ...prev, url: event.target.value }))
                    }
                />

                {/* Vida (numerico) */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="Vida"
                    type="number" // Aceptar solo valores numéricos
                    variant="standard"
                    onChange={handleNumericChange('health')}
                />

                {/* Altura (numerico) */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="Altura"
                    type="number"
                    variant="standard"
                    onChange={handleNumericChange('height')}
                />

                {/* Peso (numerico) */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="Peso"
                    type="number"
                    variant="standard"
                    onChange={handleNumericChange('weight')}
                />

                {/* Número del Pokémon (numerico) */}
                <TextField
                    sx={{ width: { md: '47%' }, mb: 3 }}
                    fullWidth
                    label="Número"
                    type="number"
                    variant="standard"
                    onChange={handleNumericChange('number')}
                />
            </DialogContent>
            <DialogActions sx={{ mb: '0.5em', mr: '1em' }}>
                <Button onClick={closeDialog} size="large" color="error" variant="contained">
                    Cancelar
                </Button>
                <Button
                    onClick={() => {
                        onCreatePokemon(newPokemon);
                        // Reset values and close modal
                        setNewPokemon(initialValuePokemon);
                        closeDialog();
                    }}
                    autoFocus
                    size="large"
                    disabled={!isPokemonValid()}
                    variant="contained"
                >
                    Añadir
                </Button>
            </DialogActions>
        </Dialog>
    );
}
