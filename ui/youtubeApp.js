<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>

var channelName = 'TechGuyWeb'; 
$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part:'contentDetails',
            forUserName:channelName,
            key:'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE'},
            function(data){
                $.each(data.items,function(i,item){
                    console.log(item);
                })
            }
        );
        });