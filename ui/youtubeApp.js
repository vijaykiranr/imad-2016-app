var channelName = 'RVK Entertainment'; 
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