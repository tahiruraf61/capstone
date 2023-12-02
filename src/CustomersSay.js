const CustomersSay = () => {
    return(
        <div className="testimonial">
            <h2>Testimonials</h2>
             <img
             width={300}
       src={require("./images/ma.png")}
       alt="customer1"
       />
       <div className="testimonial-content">
           <h3>John Doe</h3>
           <p>⭐️⭐️⭐️⭐️⭐️<br/>
            "Little Lemon Restaurant has become my all-time favorite dining spot. <br/>
            The menu is a culinary journey that never disappoints,<br/>
            offering a diverse selection of dishes that
            cater to a variety of tastes.<br/> Whether I'm in the mood for a light lunch or a special dinner,<br/>
             Little Lemon always has the perfect option.
            The emphasis on using locally<br/> sourced ingredients adds a fresh and wholesome dimension to each dish.<br/>
            The friendly and attentive staff contribute to the warm and inviting<br/>
            atmosphere, creating an overall dining experience that is second to none.<br/>
            Little Lemon Restaurant is a true culinary gem, and I highly recommend it to<br/>
            anyone looking for an unforgettable meal."</p>
       </div>

       <div className="testimonial">
       <img
       width={300}
       src={require("./images/faiza.jpg")}
       alt="customer" />
       </div>
       <div className="testimonial-content">
        <h3>Issah Faiza</h3>
        <p>⭐️⭐️⭐️⭐️⭐️ <br/>"I absolutely love Little Lemon Restaurant! The cozy ambiance,<br/> coupled with their delectable menu,
        makes it my go-to spot<br/> for a delightful dining experience. The diverse range of dishes<br/> caters to every palate,
        and the attention to detail in each<br/> presentation is truly commendable. From the refreshing<br/> lemon-infused drinks to
         the mouthwatering desserts,<br/> every bite is a burst of flavor. The friendly staff adds to the<br/> overall charm, creating
         an atmosphere that keeps me coming<br/> back for more. Little Lemon is a hidden gem that never fails<br/> to exceed my
          culinary expectations!"</p>
       </div>

       <div className="testimonial">
       <img
       width={300}
       src={require("./images/ts.png")}
       alt="customer" />
       </div>
       <div className="testimonial-content">
        <h3>Issah Bawumia</h3>
        <p>⭐️⭐️⭐️⭐️⭐️ <br/>"As a food enthusiast, I can confidently say that Little Lemon Restaurant<br/> is a culinary masterpiece.
             The fusion of flavors in their dishes is simply<br/> exceptional, and the use of fresh, high-quality
             ingredients is evident in<br/> every bite. The menu offers a perfect balance of classic favorites<br/> and
              innovative creations, making it a haven for those seekings<br/>  a unique dining experience. The chefs
              at Little Lemon have trulys<br/>  mastered the art of blending simplicity with sophistications<br/>
               The welcoming staff and cozy atmosphere make this restaurant<br/> a top choice for any occasion.
               Little Lemon is a taste sensation thats<br/>  leaves a lasting impression."</p>
       </div>
       </div>

    )
}
export default CustomersSay;