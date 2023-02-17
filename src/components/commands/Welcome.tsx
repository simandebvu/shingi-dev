import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Separator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                                
  #####  #     # ### #     #  #####  ### 
  #     # #     #  #  ##    # #     #  #  
  #       #     #  #  # #   # #        #  
   #####  #######  #  #  #  # #  ####  #  
        # #     #  #  #   # # #     #  #  
  #     # #     #  #  #    ## #     #  #  
   #####  #     # ### #     #  #####  ###
     `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 __         _____    __  ___  _____ 
 / _\  /\  /\\_   \/\ \ \/ _ \ \_   \
 \ \  / /_/ / / /\/  \/ / /_\/  / /\/
 _\ \/ __  /\/ /_/ /\  / /_\\/\/ /_  
 \__/\/ /_/\____/\_\ \/\____/\____/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Separator>----</Separator>
        <div>
          This projects source code can be found in this projects{" "}
          <Link href="https://github.com/simandebvu/shingi-dev">
            GitHub repo
          </Link>
          .
        </div>
        <Separator>----</Separator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`                  /*((*                                    
                                 #%%#(###(#%%%%%%.                              
                              %/*///(/((((//((///**%                            
                            %/*/(((///*******//////**(                          
                           #(//(((((//*,,,,*,///(((////(                        
                          ((((((((///***,***,***///(////                        
                          (/(((((###((///////(%&%#&#////.                       
                          %/(#%%#%#%%%##((((##%(//(#((//,                       
                           //(##%@@@&%/%(**(##&%%&&@#(/*                        
                           /((((###%&##(///(/#(%%%%((/// *                      
                         &%(///////(//((/,/////**/,/////*%(                     
                         *#//(////***((/////(((/**///////(                      
                          (((((((/////(#%%%(#(//////////((                      
                          /#(((((((##/((((((((/(((((((/(#                       
                             (####%%(/*,,,..,**/%%#(#((                         
                              (###%###%&&&@&&%##(%%##(                          
                               ##%%%%#(#((((((#%#%%%%(&                         
                             &%##%&&&&%%@&@&&&&&&&&%%#.&&&/                     
                          %@&&.%%%%%%&&&@@@@&&&&%%%%## %&%&&%%#,                
                     (%&&@@&&&.,(&%%%%%%%%%&%%%%%%%%  &&&&&&&&&&&&&%#*          
             .#%%%&&&&&&&&@&&&, ./@&%%%%#%%%&%%%%%%. *&&&&&&&@&&&%&&&&%%%%%#    
          #%&%&&&&&&&@&&&&&%&&&  .,@&%%%%%%%%%%%%%  .&@&&&&&&&@&&&&%&&&&&%&%%.  
         %%%&&&&&&&&@&&@@&&&&&&& , ,@&&%%%%%%%%%  .,&&&&&&&&&&&@&&&&&&&&&&%&%%  
        %&&&&&&&&@@&&&@@&&@&&&&@@@&( %&&%%%%%%   %&&@@@&@&&&&&&@&&&&&&@&&&&%&%  
        %&&&&&&&@@&&&&@@&&@&&&&&&&@@&/,(#(((.,/(@@@@@@@@&@&&&@&&@&&&%&&&&&&&%&% 
       .&&&&&&&&@&&&&@@@&&@@&&&&@&%/# .//////  &@@@@@@&&@&&&&@&&&@&&&@&@&&&&&&%
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
