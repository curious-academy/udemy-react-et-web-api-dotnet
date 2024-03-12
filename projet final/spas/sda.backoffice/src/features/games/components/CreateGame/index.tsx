import { SubmitHandler, useForm } from "react-hook-form"
import {FormInput} from './models'
import business from "../../services/game.application";
import { Game } from "../../models";

export const CreateGame = () => {
    const {register, handleSubmit, reset, formState: { errors, isValid }}  = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = data => {
        const gameToSave: Game = {
            id: 0,
            success: false,
            titre: data.title,
            videoGameId: data.videoGameId
        }
        business.createOne(gameToSave).then(() => reset({
            title: '',
            videoGameId: 0
        }));

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', { required: true })} style={ { borderColor: errors.title ? 'red': 'inherit'}}></input>
                { errors.title && <span style={{color: 'red'}}>*</span> }
                <select  {...register('videoGameId')}>
                    <option value='7'>Final fantasy 7</option>
                    <option value='8'>Final fantasy 8</option>
                    <option value='9'>Final fantasy 9</option>
                    <option value='10'>Final fantasy 10</option>
                    <option value='16'>Final fantasy 16</option>
                </select>
                <button disabled={! isValid}>Sauvegarder</button>
            </form>
        </>
    )
}