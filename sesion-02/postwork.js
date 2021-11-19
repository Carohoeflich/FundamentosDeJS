/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */

for(let space = "";space.length<3;space++) {
    for(let hashtag= "#";hashtag.length<=3;space++){
        console.log(space + hashtag);
    }
}