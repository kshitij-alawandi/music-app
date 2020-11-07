window.onload = () => {
    const song_image = document.getElementById('song-img');
    const song_title = document.getElementById('song-title');
    const song_artist = document.getElementById('song-artist');
    const song_next_up = document.getElementById('next-up');

    const play = document.getElementById('play');
    const play_icon = document.getElementById('play-icon');
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');

    const audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: 'Blackbird',
            artist: 'Alter Bridge',
            song_path: 'blackbird.mp3',
            img_path: 'image1.jpeg'
        },
        {
            title: 'Nothing Else Matters',
            artist: 'Metallica',
            song_path: 'Nothing Else Matters.mp3',
            img_path: 'image2.jpg'
        }
    ]

    play.addEventListener('click',TogglePlaySong);
    next.addEventListener('click',() => ChangeSong());
    previous.addEventListener('click',() => ChangeSong(false));
    InitPlayer();

    function InitPlayer(){
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer(){
        let song = songs[current_song_index];
        song_image.style = "background-image: url('" + song.img_path + "')";
        song_title.innerText = song.title;
        song_artist.innerText = song.artist;
        song_next_up.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;
        audio_player.src = song.song_path;
    }

    function TogglePlaySong(){
        if(audio_player.paused){
            audio_player.play();
            play_icon.classList.remove('fa-play');
            play_icon.classList.add('fa-pause');
        }else{
            audio_player.pause();
            play_icon.classList.add('fa-play');
            play_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true){
        if(next){
            current_song_index++;
            next_song_index = current_song_index + 1;
            if(current_song_index > songs.length - 1){
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }
            if(next_song_index > songs.length - 1){
                next_song_index = 0;
            }
        }else{
            current_song_index--;
            next_song_index = current_song_index + 1;
            if(current_song_index < 0){
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
}
