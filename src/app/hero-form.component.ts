import { Component } from "@angular/core";
import { Hero } from "./hero";


@Component
({
    selector:'app-hero-form',
    templateUrl:'./hero-form.component.html',
})
export class HeroFormComponent
{
    powers =['Really Smart','Super Flexible','Super Sexy','Super Faster'];
    model = new Hero(18,'Dr IQ',this.powers[0],"Chunk Overstreet");
    submited = false;
    onSubmit()
    {
        this.submited=true;

    }
    /*这个东西好像是和后端交互的，我也知不道是什么*/
    get diagnostic()
    {
        return JSON.stringify(this.model);

    }

}