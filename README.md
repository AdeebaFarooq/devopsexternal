
container :

import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Flutter Container Example"),
          backgroundColor: Colors.green,
        ),
        body: Container(
          //color: Colors.green,
          padding: EdgeInsets.all(35),
          margin: EdgeInsets.all(20),
          decoration: BoxDecoration(
             color: Colors.green,
            border: Border.all(color: Colors.black, width: 4),
            borderRadius: BorderRadius.circular(8),
            boxShadow: [
              new BoxShadow(
                //color: Colors.green,
                offset: Offset(6.0, 6.0),
              ),
            ],
          ),
          child:Text("hello , my name is adeeba", style: TextStyle(fontSize: 30),)
        ),
      ),
    );
  }
}



provider:

