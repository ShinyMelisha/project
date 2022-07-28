package com.example.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }

    @GetMapping("/view")
    public String getViewAsset() {
        return "This is view page";
    }

    @GetMapping("/add")
    public String getAddAsset(){
        return "This is add asset page";
    }
    @GetMapping("/edit")
    public String getEditAsset(){
        return "This is edit asset page";
    }
    @GetMapping("/delete")
    public String getDeleteAsset(){
        return "This is delete asset page";
    }
}
