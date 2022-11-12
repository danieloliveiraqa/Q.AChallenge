import homepagePage from "../pages/homepagePage";


class homepageUtils{
    
    visualizoaPagina(){
        homepagePage.logo().should('exist')
    }

}

export default new homepageUtils();

