import Footer from '@/components/footer'
import React from 'react'

export default function page() {
  return (
    <div>
        <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-8 flex items-center content-center justify-center">
        
            <h1 className='text-4xl text-white'>Terms and conditions</h1>
        </div>
        <div className="container text-left px-5 pt-5">
            <h1 className='text-2xl font-semibold p-2'>General terms</h1>
            <p className='font-semibold p-2 text-xl'>Last update: Nov 07, 2024</p>
            <div className="text-container">
                <p className='text-xl pt-3 pb-3'>
                    By accessing and placing an order with e-store, you confirm that you are in agreement with and 
                    bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to
                    the entire website and any email or other type of communication between you and e-tore.

            Under no circumstances shall e-store team be liable for any direct, indirect, special, incidental or 
            consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or
            the inability to use, the materials on this site, even if e-store team or an authorized representative
                has been advised of the possibility of such damages. If your use of materials from this site results in the
                need for servicing, repair or correction of equipment or data, you assume any costs thereof.

            e-store will not be responsible for any outcome that may occur during the course of usage of our
            resources.We reserve the rights to change prices and revise the resources usage policy in any moment.
                </p>
            </div>
            <h1 className='text-2xl font-semibold p-2'>Cookies</h1>
            <div className="text-container">
                <p className='text-xl pt-1 pb-3'>
                A cookie is a file containing an identifier (a string of letters and numbers) 
                that is sent by a web server to a web browser and is stored by the browser. 
                The identifier is then sent back to the server each time the browser requests a page from the server.
                 Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies 
                 in accordance with the terms of this policy.

                  We use session cookies to personalise the website for each user. We use persistent cookies to keep tracks of referrals coming 
             from our affiliate network.

       We use Google Analytics to analyse the use of our website. Our analytics service provider generates statistical and other
        information about website use by means of cookies. Our analytics service provider's privacy policy is available at: http://www.google.com/policies/privacy/.

        Deleting cookies will have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
