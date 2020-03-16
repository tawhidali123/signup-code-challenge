import styled from 'styled-components';


export const StyledDiv = styled.div`

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;


    .container{
   
        width: 100%;
        margin: 0 15%;
    	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
        background:linear-gradient(to right, #FF4B2B, #FF416C);
        border-radius: 10px;

        .wrapper{
            display: flex;
        }


        ${'' /* left side */}
        .left{
            width: 50%;
            background: #fff;
            flex: 1;

        }

        .left-wrapper{
            padding: 30px 60px;

        }


        ${'' /* right side */}
        .right{
            width: 50%;
            overflow: hidden;
            border-radius: 10px;

            video{
                height: 100%;
           
                
            }
        }


       

        .form{
            text-align: center;

            input {
                width: 100%;
                background: #eee;
                display: block;
                text-shadow: none;
                border: none;
                box-shadow: none;
                height: 40px;
                padding: 0 15px;
            }

            button{
                border: 0;
                font-size: 16px;
                display: inline-block;
                color: #fff;
                background:linear-gradient(to right, #FF4B2B, #FF416C);
                font-weight: 500;
                padding: 7.5px 30px;
                border-radius: 20px;
            }
        }



        h1{
            margin: 15px auto 20px;
            text-align: center;
            
        }
    }

`;