const stripe = Stripe(
  "pk_test_51HQ1FtAdV6Pba7ZppMSMFs38PjbjyQPqKS00ueRndkKB1EdPuAnLh1u7uXmvPfrKKnkCNGJKFGsZC0gW8QotcU7h00Y7NmNTmR"
);
const checkoutButtons = document.querySelectorAll(".checkout-button");

checkoutButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const priceId = button.getAttribute("data-price-id");

    try {
      window.location.href = `https://createcheckoutsession-74gnzl2cwq-uc.a.run.app?priceId=${priceId}`;
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  });
});
