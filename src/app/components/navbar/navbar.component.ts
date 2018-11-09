import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

    showNavMobile: boolean;


    ngOnInit() {


        $(document).ready(function () {

            // home

            $('#home').mouseover(function () {
                $('#slideBorder').css({ "top": "150px", "opacity": "1" });
            });
            $('#home').mouseout(function () {
                $('#slideBorder').css({ "opacity": "0" });
            });

            // about

            $('#about').mouseover(function () {
                $('#slideBorder').css({ "top": "206px", "opacity": "1" });
            });
            $('#about').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            });

            // courses

            $('#courses').mouseover(function () {
                $('#slideBorder').css({ "top": "262px", "opacity": "1" });
            });
            $('#courses').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            });

            // get course

            $('#getCourse').mouseover(function () {
                $('#slideBorder').css({ "top": "318px", "opacity": "1" });
            });
            $('#getCourse').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            });

            // team

            $('#team').mouseover(function () {
                $('#slideBorder').css({ "top": "374px", "opacity": "1" });
            });
            $('#team').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            });

            // blog

            $('#blog').mouseover(function () {
                $('#slideBorder').css({ "top": "430px", "opacity": "1" });
            });
            $('#blog').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            })

            // contact

            $('#contact').mouseover(function () {
                $('#slideBorder').css({ "top": "486px", "opacity": "1" });
            });
            $('#contact').mouseout(function () {
                $('#slideBorder').css({ "top": "0px", "opacity": "0" });
            });

            $('.sidenav-toggler').click(function () {
                $('#page-top').toggleClass("sidenav-toggled");
            });


        });

    }


    closeNav(){
        this.showNavMobile = !this.showNavMobile;
    }


}
