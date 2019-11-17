import React, {Component} from 'react';
import "./newslettert.css";
import Sidebar from './SidebarBlank';
 
export default class NewsletterTemplate extends Component{
    render(){
        return(
            <div className="fixoverflow">
                <Sidebar/>
                <div class="container">
                    <div class="row">
                <div class="col-sm-5">
                <div class = "sidediv">
                    <p align = "center">Shah Rukh Khan (born 2 November 1965), also known by the initialism SRK, is an Indian actor, film producer, and television personality. Referred to in the media as the "Badshah of Bollywood", "King of Bollywood" and "King Khan", he has appeared in more than 80 Bollywood films, and earned numerous accolades, including 14 Filmfare Awards. </p>
                    
                </div>
                </div>
                <div class="col-sm-7">
                    <div class="maindiv">
                        <h2 align="center"> Shah Rukh Khan</h2>
                        <p align="center">
                            The Government of India has awarded him the Padma Shri, the fourth-highest Indian civilian honour, and the Government of France the Officier of the Ordre des Arts et des Lettres, the second-degree of the honour, and the Chevalier of the Legion of Honour, the fifth degree of the honour.Khan has a significant following in Asia and the Indian diaspora worldwide. In terms of audience size and income, he has been described as one of the most successful film stars in the world.Khan began his career with appearances in several television series in the late 1980s. He made his Bollywood debut in 1992 with Deewana. Early in his career, Khan was recognised for portraying villainous roles in the films Darr (1993), Baazigar (1993) and Anjaam (1994). He then rose to prominence after starring in a series of romantic films, including Dilwale Dulhania Le Jayenge (1995), Dil To Pagal Hai (1997), Kuch Kuch Hota Hai (1998), Mohabbatein (2000) and Kabhi Khushi Kabhie Gham... (2001). Khan went on to earn critical acclaim for his portrayal of an alcoholic in Devdas (2002), a NASA scientist in Swades (2004), a hockey coach in Chak De! India (2007) and a man with Asperger syndrome in My Name Is Khan (2010). His highest-grossing films include the comedies Chennai Express (2013), Happy New Year (2014), Dilwale (2015), and the crime film Raees (2017). Many of his films display themes of Indian national identity and connections with diaspora communities, or gender, racial, social and religious differences and grievances.
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}