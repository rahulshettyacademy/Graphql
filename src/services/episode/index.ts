import { STATUS } from "@enums/status.enum"
import { IEpisode, IEpisodeSchema } from "@models/Episode"


export interface IEpisodeService {
    getAllEpisodes(): Promise<IEpisode[]>
    getEpisode(episodeId: number): Promise<IEpisode | undefined>
    getEpisodes(episodeIds: number[]): Promise<IEpisode[]>
    createEpisode(episode: IEpisodeSchema): Promise<{id: number}>
    associateEpisodeCharacter(episodeId: number, characterId: number): Promise<{status: STATUS}>
}