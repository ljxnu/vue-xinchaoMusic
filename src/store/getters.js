
import {getSong} from 'api/song'

export const musicList = state => state.musicList

export const playlist = state => state.playlist

export const singer = state => state.singer

export const fullScreen = state => state.fullScreen

export const playing = state => state.playing

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const currentSongUrl = (state) => {
    getSong(state.playList[state.currentIndex]).then((res) => {
        console.log(state.playList, 'res')
        return res.data.data.url || ''
    })
}
