import java.sql.*;
public class SQLApp
{
    public static void main(String[] args){
        new SQLApp();
    }


    public SQLApp()
    {
        try{
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/grades", "root", "0000");
            con.setAutoCommit(false);
            
            selectQuery(con);
            insertQuery(con);
            updateQuery(con);
            deleteQuery(con);

            con.close();

        }catch(SQLException e){
            e.printStackTrace();
        }
    }


    public void selectQuery (Connection c){
        try{
            Statement stmt1 = c.createStatement();
            String queryString1 = new String("Select * from courses");
            ResultSet rs = stmt1.executeQuery(queryString1);
            while(rs.next())
            {
                System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " +
                rs.getString(3));
            }
            stmt1.close();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }


    public void insertQuery (Connection c){
        try{
            PreparedStatement pstmt2 = c.prepareStatement( "INSERT INTO courses (course_id, course_name, credit_hour) VALUES ( ? , ? , ?)" );
            pstmt2.setInt(1, 200);
            pstmt2.setString(2,"SQL4");
            pstmt2.setInt(3, 120);
            pstmt2.addBatch();

            pstmt2.executeBatch();
            c.commit();

            pstmt2.close();

        }catch(SQLException e){
            e.printStackTrace();
        }
    }


    public void updateQuery (Connection c){
        try{
            PreparedStatement pstmt3 = c.prepareStatement( "UPDATE courses SET course_name = ?, credit_hour = ? WHERE course_id=5" );
            pstmt3.setString(1,"JavaCourse");
            pstmt3.setInt(2, 50);
            pstmt3.addBatch();

            pstmt3.executeBatch();
            c.commit();

            pstmt3.close();

        }catch(SQLException e){
            e.printStackTrace();
        }
    }

    public void deleteQuery(Connection c){
        try {
            PreparedStatement pstmt4 = c.prepareStatement("DELETE FROM courses WHERE course_id=?");

            pstmt4.setInt(1, 10);
            pstmt4.addBatch();

            pstmt4.executeBatch();
            c.commit();

            pstmt4.close();

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}