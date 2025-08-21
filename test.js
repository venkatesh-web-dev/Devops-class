const greet=require('.\app');

if(greet()=="Hello from DevOps!"){
    console.log("✔  Test Passed");
    Process.exit(0);
}else{
    console.log("⊠ Test Failed");
    process.exit(1);
}